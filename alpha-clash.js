function play()
{
    //step-1 hide the home screen .to hide the screen add the class hidden to the home section
        const homeSection = document.getElementById('home-screen');
        console.log(homeSection.classList);
        homeSection.classList.add('hidden');
    //show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

}
function continueGame()
{
    //step1: generate a random alphabet 
    const alphabetString = 'abcdefghijklmnopqrstuwxyz';
    const alphabet = alphabetString.split('');
    console.log(alphabet);

}