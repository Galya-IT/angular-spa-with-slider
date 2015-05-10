'use strict';

app.controller('NewsController', function($scope) {
    
    /* If no image is available the server returns a default one. */
    
    var articlesJsonArray = [
        {
            title: 'title',
            subtitle: 'subtitle',
            author: 'author',
            dateAdded: 'dateAdded',
            resume: 'resume',
            featuredImageUrl: './assets/img/no-image.png',
            isFullArticleAvailable: true,
            fullArticleLink: 'fullArticleLink',
            fullText: 'fullText: <p>1 Corinthians 13 King <br />James Version (KJV)</p>'
        },
        {
            title: 'Novinataasfs',
            subtitle: 'Eto tova e ',
            author: 'neizwesten',
            dateAdded: '25.03.2011',
            resume: 'Eto malko pikantno info po povod na slu4kata slu4ila se nqkoga nqkyde s nqkogo si: asfsaf asfsa f asf as f asf as fas f as fas f asfasfasfasf asf asfasewtywdhged sf,.',
            featuredImageUrl: './assets/img/no-image.png',
            isFullArticleAvailable: true,
            fullArticleLink: 'fullArticleLink',
            fullText: 'fullText: <p>1 Corinthians 13 King <br />James Version (KJV)</p>'
        }
    ];
    
    $scope.articles = articlesJsonArray;
});