function resetFlexbox() {
    const container = document.getElementById('container');
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'stretch';
    container.style.gap = '0px';
    document.getElementById('gap').value = 0;
    document.getElementById('grow').value = 0;
    document.getElementById('grows').value = 0;
    document.getElementById('growz').value = 0;
    document.getElementById('box1').style.flexGrow = 0;
    document.getElementById('box2').style.flexGrow = 0;
    document.getElementById('box3').style.flexGrow = 0;
}

function updateGap() {
    const gapValue = document.getElementById('gap').value;
    document.getElementById('container').style.gap = `${gapValue}px`;
}

function setFlexDirection(direction) {
    document.getElementById('container').style.flexDirection = direction;
}

function setJustifyContent(justifyContent) {
    document.getElementById('container').style.justifyContent = justifyContent;
}

function setAlignItems(alignItems) {
    document.getElementById('container').style.alignItems = alignItems;
}

function updateFlexGrow(boxNumber) {
    let growValue;
    switch (boxNumber) {
        case 1:
            growValue = document.getElementById('grow').value;
            break;
        case 2:
            growValue = document.getElementById('grows').value;
            break;
        case 3:
            growValue = document.getElementById('growz').value;
            break;
    }
    document.getElementById(`box${boxNumber}`).style.flexGrow = growValue;
}
