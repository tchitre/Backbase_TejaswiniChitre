Feature('CRUD Articles');


Scenario('Test successful login', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'tejaswini.chitre@gmail.com');
    I.fillField('Password', 'test007');
    I.click(locate('button').withText('Sign in'));
    I.see("Your Feed");
    //pause();
  
});

Scenario('Test Invalid credentials', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'test');
    I.fillField('Password', 'password');
    I.click(locate('button').withText('Sign in'));
    I.see("email or password is invalid");
  // pause();

});

Scenario('Test Read and clicking tag', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.see("Popular Tags");
    I.click('Test');
//    pause();

});

Scenario('Test creating a blog post', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'tejaswini.chitre@gmail.com');
    I.fillField('Password', 'test007');
    I.click(locate('button').withText('Sign in'));
    I.see("Your Feed");
    I.click('New Post');
    I.fillField('Article Title', 'how to crack an egg');
    I.fillField('What\'s this article about?', 'cooking');
    I.fillField('Write your article (in markdown)', 'hit it hard');
    I.fillField('Enter Tags', 'tag1');
    I.click(locate('button').withText('Publish Article'));
    I.see("Delete Article");
    I.see("Post Comment");

});


Scenario('Check your article under Global Feed', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'tejaswini.chitre@gmail.com');
    I.fillField('Password', 'test007');
    I.click(locate('button').withText('Sign in'));
    I.see("Global Feed");   
    I.click('Global Feed');
    I.see("how to crack an egg");
    I.click({xpath:'/html/body/app-root/app-home/div/div[2]/div/div[1]/app-article-list/app-article-list-item[1]/div/a/h1'});
    I.see("hit it hard");
   // pause();

});


Scenario('Test Editing a blog post', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'tejaswini.chitre@gmail.com');
    I.fillField('Password', 'test007');
    I.click(locate('button').withText('Sign in'));
    I.click('test007');
    I.see("Tejatesting");
    I.click('Tejatesting');
    I.click({xpath: '/html/body/app-root/app-article/div/div[1]/div/app-article-meta/div/span[1]/a'});
    I.fillField('Enter Tags', 'tag14');    
    I.click(locate('button').withText('Publish Article'));
    I.see("Delete Article");
    I.see("Post Comment");
  // pause();

});

Scenario('Test deleting a blog post', (I) => {
    I.amOnPage('https://qa-task.backbasecloud.com');
    I.click('Sign in');
    I.fillField('Username', 'tejaswini.chitre@gmail.com');
    I.fillField('Password', 'test007');
    I.click(locate('button').withText('Sign in'));
    I.click('test007');
    I.click('how to crack an egg');
    I.click({xpath: '/html/body/app-root/app-article/div/div[2]/div[2]/app-article-meta/div/span[1]/button'});

     //pause();

});



