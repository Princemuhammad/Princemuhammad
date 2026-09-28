"""Generate the Umrah Companion app icon set (Ka'bah motif) with Pillow.

Produces, at supersampled resolution then downscaled for anti-aliasing:
  - icon.png                      1024x1024, opaque, for the default/iOS icon
  - android-icon-foreground.png   1024x1024, transparent, Kaaba only (adaptive icon fg)
  - android-icon-background.png   1024x1024, opaque solid colour (adaptive icon bg)
  - android-icon-monochrome.png   1024x1024, transparent, single-colour silhouette
  - splash-icon.png               1024x1024, transparent, Kaaba only (used on splash)
  - favicon.png                   48x48, opaque, for the web favicon
"""

from PIL import Image, ImageDraw

SCALE = 4
SIZE = 1024 * SCALE

BG_DEEP_GREEN = (7, 63, 51, 255)      # colors.primaryDark
GOLD = (201, 162, 75, 255)
GOLD_LIGHT = (233, 210, 138, 255)
KAABA_BLACK = (21, 21, 21, 255)
KAABA_BLACK_DARK = (13, 13, 13, 255)
KAABA_BLACK_SIDE = (35, 35, 35, 255)
WHITE = (255, 255, 255, 255)


def draw_kaaba(draw: ImageDraw.ImageDraw, cx: int, cy: int, w: int):
    """Draw an isometric Ka'bah cube centred at (cx, cy) with total width w."""
    h_front = w * 0.62
    depth = w * 0.30
    skew_y = depth * 0.55

    # Front face corners
    fx0, fy0 = cx - w / 2, cy - h_front / 2
    fx1, fy1 = cx + w * 0.14, cy - h_front / 2
    fx2, fy2 = cx + w * 0.14, cy + h_front / 2
    fx3, fy3 = cx - w / 2, cy + h_front / 2

    # Side (right) face corners, receding up-right
    sx1, sy1 = fx1 + depth, fy1 - skew_y
    sx2, sy2 = fx2 + depth, fy2 - skew_y

    # Top face
    tx0, ty0 = fx0 + depth * 0.35, fy0 - skew_y * 0.65

    # Side face (darker)
    draw.polygon([(fx1, fy1), (sx1, sy1), (sx2, sy2), (fx2, fy2)], fill=KAABA_BLACK_DARK)
    # Front face
    draw.polygon([(fx0, fy0), (fx1, fy1), (fx2, fy2), (fx3, fy3)], fill=KAABA_BLACK)
    # Top face (roof), connecting front-top edge to a receded top edge
    draw.polygon(
        [(fx0, fy0), (fx1, fy1), (sx1, sy1), (tx0, ty0)],
        fill=KAABA_BLACK_SIDE,
    )

    # Gold kiswah band across the front + side face
    band_h = h_front * 0.24
    band_y0 = cy - band_h / 2 - h_front * 0.06
    band_y1 = band_y0 + band_h
    draw.polygon(
        [(fx0, band_y0), (fx1, band_y0), (fx1, band_y1), (fx0, band_y1)],
        fill=GOLD,
    )
    # Thin light-gold trim line at top of band
    trim_h = band_h * 0.16
    draw.polygon(
        [(fx0, band_y0), (fx1, band_y0), (fx1, band_y0 + trim_h), (fx0, band_y0 + trim_h)],
        fill=GOLD_LIGHT,
    )
    # Band continues onto the side face, narrower due to perspective
    draw.polygon(
        [
            (fx1, band_y0),
            (sx1, band_y0 - skew_y * 0.5),
            (sx1, band_y1 - skew_y * 0.5),
            (fx1, band_y1),
        ],
        fill=(GOLD[0], GOLD[1], GOLD[2], 235),
    )

    # Door (Bab al-Ka'bah) - gold-framed dark rectangle on front face, right side
    door_w = w * 0.16
    door_h = h_front * 0.38
    door_x1 = fx1 - w * 0.06
    door_x0 = door_x1 - door_w
    door_y1 = fy3
    door_y0 = door_y1 - door_h
    frame = w * 0.012
    draw.rectangle([door_x0 - frame, door_y0 - frame, door_x1 + frame, door_y1], fill=GOLD)
    draw.rectangle([door_x0, door_y0, door_x1, door_y1], fill=KAABA_BLACK_DARK)


def make_canvas(bg=None):
    img = Image.new('RGBA', (SIZE, SIZE), bg if bg else (0, 0, 0, 0))
    return img, ImageDraw.Draw(img)


def save_downscaled(img: Image.Image, path: str, final_size: int):
    img = img.resize((final_size, final_size), Image.LANCZOS)
    img.save(path)
    print(f'Wrote {path} ({final_size}x{final_size})')


def main():
    out = 'assets'
    kaaba_w = SIZE * 0.62
    cy = SIZE * 0.52

    # 1) Default / iOS icon: deep green background, gold ring, Kaaba centred
    img, d = make_canvas(BG_DEEP_GREEN)
    ring_pad = SIZE * 0.035
    d.ellipse(
        [ring_pad, ring_pad, SIZE - ring_pad, SIZE - ring_pad],
        outline=GOLD,
        width=int(SIZE * 0.012),
    )
    draw_kaaba(d, SIZE / 2, cy, kaaba_w)
    save_downscaled(img, f'{out}/icon.png', 1024)

    # 2) Adaptive icon foreground: transparent, Kaaba only, kept within safe zone (~66%)
    img, d = make_canvas(None)
    draw_kaaba(d, SIZE / 2, SIZE / 2, SIZE * 0.42)
    save_downscaled(img, f'{out}/android-icon-foreground.png', 1024)

    # 3) Adaptive icon background: solid deep green
    img, d = make_canvas(BG_DEEP_GREEN)
    save_downscaled(img, f'{out}/android-icon-background.png', 1024)

    # 4) Monochrome (Android 13+ themed icons): single-colour silhouette, transparent bg
    img, d = make_canvas(None)
    draw_kaaba(d, SIZE / 2, SIZE / 2, SIZE * 0.42)
    # Flatten to solid white silhouette using the alpha channel as a mask
    alpha = img.split()[3]
    mono = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    white_layer = Image.new('RGBA', (SIZE, SIZE), (255, 255, 255, 255))
    mono.paste(white_layer, (0, 0), alpha)
    save_downscaled(mono, f'{out}/android-icon-monochrome.png', 1024)

    # 5) Splash icon: transparent, Kaaba only, generous padding
    img, d = make_canvas(None)
    draw_kaaba(d, SIZE / 2, SIZE / 2, SIZE * 0.5)
    save_downscaled(img, f'{out}/splash-icon.png', 1024)

    # 6) Favicon: small opaque version of the main icon
    img, d = make_canvas(BG_DEEP_GREEN)
    draw_kaaba(d, SIZE / 2, cy, kaaba_w)
    save_downscaled(img, f'{out}/favicon.png', 196)


if __name__ == '__main__':
    main()
