//https://github.com/locomotivemtl/astro-boilerplate/blob/main/src/scripts/classes/Scroll.ts
import { $scroll } from '../stores/scrollStore';

import LocomotiveScroll, {
	type lenisTargetScrollTo,
	type ILenisScrollToOptions
} from 'locomotive-scroll';

export class Scroll {
	static locomotiveScroll: LocomotiveScroll;
	// =============================================================================
	// Lifecycle
	// =============================================================================
	static init() {
		this.locomotiveScroll = new LocomotiveScroll({
			//Disable smoothScroll
			lenisOptions: {
				lerp: 0,
				smoothWheel: false
			},
			scrollCallback({ scroll, limit, velocity, direction, progress }) {
				$scroll.set({
					scroll,
					limit,
					velocity,
					direction,
					progress
				});
			}
		});
	}

	static destroy() {
		this.locomotiveScroll?.destroy();
	}

	// =============================================================================
	// Methods
	// =============================================================================
	static start() {
		this.locomotiveScroll?.start();
	}

	static stop() {
		this.locomotiveScroll?.stop();
	}

	static addScrollElements(container: HTMLElement) {
		this.locomotiveScroll?.addScrollElements(container);
	}

	static removeScrollElements(container: HTMLElement) {
		this.locomotiveScroll?.removeScrollElements(container);
	}

	static scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions) {
		this.locomotiveScroll?.scrollTo(target, options);
	}
}
