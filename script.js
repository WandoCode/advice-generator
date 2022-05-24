window.onload = async () => {
    const adviceURL = "https://api.adviceslip.com/advice";
    const adviceTextEl = document.getElementById("advice-text");
    const adviceIdEl = document.getElementById("advice-id");
    const loadAdviceBtn = document.getElementById("advice-change");
    const separatorRight = document.getElementsByClassName("separator__center__equal")[0];
    const separatorLeft = document.getElementsByClassName("separator__center__equal")[1];

    const fillNewAdvice = async () => {
        const advice = await adviceFetcher();
        adviceTextEl.innerText = `“${advice.advice}”`;
        adviceIdEl.innerText = advice.id
    }

    const adviceFetcher = async () => {
        let rep = await fetch(adviceURL);
        let adviceObject = await rep.json();

        return adviceObject.slip
    }

    await fillNewAdvice()
    loadAdviceBtn.onclick = await fillNewAdvice;

    loadAdviceBtn.addEventListener('mouseenter', e => {
        separatorRight.classList.add("separator__center__equal--spin-right");
        separatorRight.classList.remove("separator__center__equal--spin-left");
        separatorLeft.classList.add("separator__center__equal--spin-left");
        separatorLeft.classList.remove("separator__center__equal--spin-right");
    })
    loadAdviceBtn.addEventListener('mouseleave', e => {
        separatorRight.classList.remove("separator__center__equal--spin-right");
        separatorRight.classList.add("separator__center__equal--spin-left");
        separatorLeft.classList.remove("separator__center__equal--spin-left");
        separatorLeft.classList.add("separator__center__equal--spin-right");
    })
}



