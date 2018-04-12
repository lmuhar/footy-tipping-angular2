import * as cheerio from 'cheerio';
import * as request from 'request';

export default class AflLadderCtrl {

    getAflLadderData = (req, res) => {

        const url = 'https://muhar-footy-tipping-2.herokuapp.com/';

        request(url, (err, response, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                let team;
                const json = {team: '', points: ''};

                $('.card-header').filter(() => {
                    const data = $(this);
                    console.log('data', data);
                    team = data.text();

                    json.team = team;
                    console.log(team);
                });
                res.json(json);
            }
        });
    }
}
