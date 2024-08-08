export function createShareElement() {
    const newShow = document.createElement('div');
    newShow.id = `shareSandwich`;
    newShow.className = 'infoAndShare';
    newShow.innerHTML = `    
        <div class="sandwich">
            <p class="shareText">SHARE</p>
            <a href="http://"><img src="images/icon-facebook.svg" class="linksToSocialMedias"></a>
            <a href="http://"><img src="images/icon-twitter.svg" class="linksToSocialMedias"></a>
            <a href="http://"><img src="images/icon-pinterest.svg" class="linksToSocialMedias"></a>
        </div>
        <div class="triangle"></div>`;
    return newShow;
}

export function removeShareElement(){
    let show = document.getElementById("shareSandwich");
    if(show)  show.remove();
}

export function createProfileElement() {
    const newShow = document.createElement('div');
    newShow.id = 'porfile';
    newShow.className = 'hide';
    newShow.innerHTML = `
        <img src="images/avatar-michelle.jpg" class="avatar">
        <div class="infoBar">
            <h2>Michelle Appleton</h2>
            <h3>28 Jun 2020</h3>
        </div>
        <button type="button" id="shareButton" onclick="showAndHide()">
            <img src="images/icon-share.svg" class="shareImage">
        </button>`;
    return newShow;
}

export function createMobileShareElement() {
    const newShow = document.createElement('div');
    newShow.id = 'sharePorfile';
    newShow.className = 'show';
    newShow.innerHTML = `
        <div id="infoAndShare" class="show">
            <p class="shareText">SHARE</p>
            <a href="http://"><img src="images/icon-facebook.svg" class="linksToSocialMedias"></a>
            <a href="http://"><img src="images/icon-twitter.svg" class="linksToSocialMedias"></a>
            <a href="http://"><img src="images/icon-pinterest.svg" class="linksToSocialMedias"></a>
            <button type="button" id="shareButton" onclick="showAndHide()">
                <img src="images/icon-share.svg" class="shareImage">
            </button> 
        </div>`;
    return newShow;
}