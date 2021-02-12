const entryEvents = {
	start: new Event('enterStart'),
	quarter: new Event('enterQuarter'),
	half: new Event('enterHalf'),
	threeQuarter: new Event('enterThreeQuarter'),
	end: new Event('enterEnd'),
};

class EntryAnimation extends HTMLElement {
	constructor() {
		super();
		
		let observer = new IntersectionObserver(this.onWindowEnter.bind(this), {
			threshold: [0,0.25,0.5,0.75,1]
		});
		
		observer.observe(this);
	}
	
	onWindowEnter(entries, observer) {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				this.dispatchEvent(entryEvents.start);	
			}
			if (entry.intersectionRatio > 0.25) {
				this.dispatchEvent(entryEvents.quarter);	
			}
			if (entry.intersectionRatio > 0.5) {
				this.dispatchEvent(entryEvents.half);	
			}
			if (entry.intersectionRatio > 0.75) {
				this.dispatchEvent(entryEvents.threeQuarter);	
			}
			if (entry.intersectionRatio == 1) {
				this.dispatchEvent(entryEvents.end);
				observer.disconnect();
			}
		})
	}
}

const init = (() => {
    if (customElements) {
        customElements.define('entry-animation', EntryAnimation);
    }
})();

export default init