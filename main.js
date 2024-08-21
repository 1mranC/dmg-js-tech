(function () {
  const style = document.createElement("style");
  style.innerHTML = `
    .scroll-anchor {
        visibility:hidden;
        position: absolute;        
        left: 0;
        right: 0;
        height: 1px;
    }
`;
  document.head.appendChild(style);

  function emitScrollDepthEvent(percentage) {
    const event = new CustomEvent("scrollDepth", {
      detail: { percentage: percentage },
    });
    window.dispatchEvent(event);
    console.log(`Scroll depth reached: ${percentage}%`);
  }

  function createAnchorElem(articleElement, anchorPoints) {
    return anchorPoints.map((percentage) => {
      const anchorElem = document.createElement("div");
      anchorElem.className = "scroll-anchor";
      anchorElem.style.top = `${percentage * articleElement.scrollHeight}px`;
      anchorElem.setAttribute("data-scroll-depth", percentage * 100);

      articleElement.appendChild(anchorElem);
      return anchorElem;
    });
  }

  (function trackScrollDepth(anchorPoints = [0.25, 0.5, 1]) {
    const pageContainer = document.querySelector(".page-container");
    if (!pageContainer) {
      console.error("No Page Container found.");
      return;
    }

    const articleElement = pageContainer.querySelector(".article-body");
    if (!articleElement) {
      console.error("No Article Element found.");
      return;
    }

    const anchorElems = createAnchorElem(articleElement, anchorPoints);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const percentage = entry.target.getAttribute("data-scroll-depth");
            emitScrollDepthEvent(parseInt(percentage, 10));

            // cleanup
            entry.target.remove();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    anchorElems.forEach((anchorElem) => observer.observe(anchorElem));
    console.log("Scroll depth tracking initialized.");
  })();
})();

window.addEventListener("scrollDepth", function (event) {
  const percentage = event.detail.percentage;
  console.log(`User has scrolled ${percentage}% of the article.`);
});
