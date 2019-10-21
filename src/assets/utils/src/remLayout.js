export default function () {
	let rootDoc = document.documentElement,
		resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = () => {
			let clientWidth = Math.max(rootDoc.clientWidth, window.innerWidth)
			if (!clientWidth) return
			rootDoc.style.fontSize = 20 * (clientWidth / 320) + 'px'
		}
	recalc()
	window.addEventListener(resizeEvent, recalc, !1)
	window.addEventListener('DOMContentLoaded', recalc, !1)
}