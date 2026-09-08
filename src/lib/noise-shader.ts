export const vertexShader = /* glsl */ `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseStrength;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 aspectUv = uv;
  aspectUv.x *= uResolution.x / uResolution.y;

  float t = uTime * 0.03;
  float n = fbm(aspectUv * 3.0 + vec2(t, -t * 0.6));
  n += fbm(aspectUv * 6.0 - t) * 0.5;

  vec3 base = vec3(0.035, 0.03, 0.045);
  vec3 highlight = vec3(0.45, 0.25, 0.85);
  vec3 color = mix(base, highlight, smoothstep(0.3, 0.9, n));

  float d = distance(uv, uMouse);
  float glow = uMouseStrength * exp(-d * 4.0) * 0.35;
  color += highlight * glow;

  float vig = smoothstep(0.9, 0.25, distance(uv, vec2(0.5)));
  color *= mix(0.4, 1.0, vig);

  gl_FragColor = vec4(color, 1.0);
}
`;
