function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
            this.result = '';
        }

        toString() {
            this.result += `Post: ${this.title}\n`
            this.result += `Content: ${this.content}\n`
            return this.result.trim();
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment)
        }


        toString() {
            super.toString()
            this.result += `Rating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length > 0) {
                this.result += `Comments:\n`
                for (let comment of this.comments) {
                    this.result += ` * ${comment}\n`
                }
            }
            return this.result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            super.toString();
            this.result += `Views: ${this.views}\n`;
            return this.result.trim();
        }
    }
    return {Post,SocialMediaPost,BlogPost}
}
    let test = new BlogPost("TestTitle", "TestContent", 5);
test.view().view().view();
console.log(test.toString())