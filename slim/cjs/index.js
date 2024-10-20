"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSlim = loadSlim;
const basic_1 = require("@tsparticles/basic");
const plugin_easing_quad_1 = require("@tsparticles/plugin-easing-quad");
const shape_emoji_1 = require("@tsparticles/shape-emoji");
const interaction_external_attract_1 = require("@tsparticles/interaction-external-attract");
const interaction_external_bounce_1 = require("@tsparticles/interaction-external-bounce");
const interaction_external_bubble_1 = require("@tsparticles/interaction-external-bubble");
const interaction_external_connect_1 = require("@tsparticles/interaction-external-connect");
const interaction_external_grab_1 = require("@tsparticles/interaction-external-grab");
const interaction_external_pause_1 = require("@tsparticles/interaction-external-pause");
const interaction_external_push_1 = require("@tsparticles/interaction-external-push");
const interaction_external_remove_1 = require("@tsparticles/interaction-external-remove");
const interaction_external_repulse_1 = require("@tsparticles/interaction-external-repulse");
const interaction_external_slow_1 = require("@tsparticles/interaction-external-slow");
const shape_image_1 = require("@tsparticles/shape-image");
const updater_life_1 = require("@tsparticles/updater-life");
const shape_line_1 = require("@tsparticles/shape-line");
const move_parallax_1 = require("@tsparticles/move-parallax");
const interaction_particles_attract_1 = require("@tsparticles/interaction-particles-attract");
const interaction_particles_collisions_1 = require("@tsparticles/interaction-particles-collisions");
const interaction_particles_links_1 = require("@tsparticles/interaction-particles-links");
const shape_polygon_1 = require("@tsparticles/shape-polygon");
const updater_rotate_1 = require("@tsparticles/updater-rotate");
const shape_square_1 = require("@tsparticles/shape-square");
const shape_star_1 = require("@tsparticles/shape-star");
const updater_stroke_color_1 = require("@tsparticles/updater-stroke-color");
async function loadSlim(engine, refresh = true) {
    await (0, move_parallax_1.loadParallaxMover)(engine, false);
    await (0, interaction_external_attract_1.loadExternalAttractInteraction)(engine, false);
    await (0, interaction_external_bounce_1.loadExternalBounceInteraction)(engine, false);
    await (0, interaction_external_bubble_1.loadExternalBubbleInteraction)(engine, false);
    await (0, interaction_external_connect_1.loadExternalConnectInteraction)(engine, false);
    await (0, interaction_external_grab_1.loadExternalGrabInteraction)(engine, false);
    await (0, interaction_external_pause_1.loadExternalPauseInteraction)(engine, false);
    await (0, interaction_external_push_1.loadExternalPushInteraction)(engine, false);
    await (0, interaction_external_remove_1.loadExternalRemoveInteraction)(engine, false);
    await (0, interaction_external_repulse_1.loadExternalRepulseInteraction)(engine, false);
    await (0, interaction_external_slow_1.loadExternalSlowInteraction)(engine, false);
    await (0, interaction_particles_attract_1.loadParticlesAttractInteraction)(engine, false);
    await (0, interaction_particles_collisions_1.loadParticlesCollisionsInteraction)(engine, false);
    await (0, interaction_particles_links_1.loadParticlesLinksInteraction)(engine, false);
    await (0, plugin_easing_quad_1.loadEasingQuadPlugin)();
    await (0, shape_emoji_1.loadEmojiShape)(engine, false);
    await (0, shape_image_1.loadImageShape)(engine, false);
    await (0, shape_line_1.loadLineShape)(engine, false);
    await (0, shape_polygon_1.loadPolygonShape)(engine, false);
    await (0, shape_square_1.loadSquareShape)(engine, false);
    await (0, shape_star_1.loadStarShape)(engine, false);
    await (0, updater_life_1.loadLifeUpdater)(engine, false);
    await (0, updater_rotate_1.loadRotateUpdater)(engine, false);
    await (0, updater_stroke_color_1.loadStrokeColorUpdater)(engine, false);
    await (0, basic_1.loadBasic)(engine, refresh);
}
