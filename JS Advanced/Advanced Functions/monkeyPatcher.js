function solve(input) {
    switch (input){
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let currentUpVotes = this.upvotes;
            let curentDownVotes = this.downvotes;
            let rating = 'new';

            if(curentDownVotes + currentUpVotes >= 10){
                if(currentUpVotes > 0.66 * (currentUpVotes + curentDownVotes)){
                    rating = 'hot'
                }else if(curentDownVotes > 100 || currentUpVotes > 100){
                    rating = 'controversial'
                }else if(curentDownVotes > currentUpVotes){
                    rating = 'unpopular'
                }
            }

            if(currentUpVotes + curentDownVotes > 50){
                let modifier = Math.ceil(0.25 * Math.max(currentUpVotes,curentDownVotes))
                curentDownVotes += modifier;
                currentUpVotes += modifier;
            }
            let score = currentUpVotes - curentDownVotes;
            return [currentUpVotes,curentDownVotes,score,rating]

    }
}

solve.call(post,'upvote')
solve.call(post,'downvote')