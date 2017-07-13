## How to get started 
Hexo主题效果图：[我的博客](http://blog.ningyixiao.com)
> First of all, Make sure hexo is installed correctly.

### Step 1
    cd [blog folder]
    hexo init
    cd themes/
    git clone https://github.com/ningyixiao/theme-for-hexo-Ning.git
    
接着将主题的名称改短一点，然后返回博客根目录。

    mv theme-for-hexo-Ning Ning  
    cd ../
    
### Step 2
    vim _config.yml
修改博客的项目配置文件，修改`theme:Ning`，这样就已经成功地将博客主题替换为新下载的主题

### Step 3
    cd themes/Ning/
    cat _config.yml
进入博客主题文件夹，查看主题配置文件，找到`favicon: /favicon.png`这一行，将之后的全部内容(不包含这一行)都复制。
    
    cd ../../
    vim _config.yml
然后重新返回博客根目录下，打开并修改博客的配置文件，将之前的内容粘贴到该文件中。
> 注意：在粘贴的过程中，由于博客自动生成的配置文件内容会和粘贴的内容重复，因此将重复的部分覆盖即可。

### Step 4
本主题做了一定的SEO优化，比如缩短文章链接，给外链加上`rel="external nofollow"`，生成sitemap等，使用到了一些第三方hexo插件，下面是对插件的安装。
> 安装插件的时候，确保在博客的根目录下。<br>插件的配置已经在之前复制的内容中了，请确保之前的cv(复制粘贴)操作没错。

#### Plugin 1: [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)
    npm install hexo-abbrlink --save
#### Plugin 2: [hexo-autonofollow](https://github.com/liuzc/hexo-autonofollow)
    npm install hexo-autonofollow --save
#### Plugin 3: [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
    npm install hexo-generator-sitemap --save   
