document.getElementById('reveal-fact').addEventListener('click', function() {
    var fact = document.getElementById('fact');
    if (fact.classList.contains('hidden')) {
        fact.classList.remove('hidden');
        this.textContent = 'Hide Fun Fact';
    } else {
        fact.classList.add('hidden');
        this.textContent = 'Reveal a Fun Fact';
    }
});
