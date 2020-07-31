import * as cheerio from 'cheerio';
import * as request from 'request';

export default class AflLadderCtrl {
  getAflLadderData = (req, res) => {
    const url = 'http://www.fanfooty.com.au/game/ladder.php';

    request(url, (err, response, html) => {
      if (!err) {
        const $ = cheerio.load(html);
        const list = [];

        $('table')
          .find('tr')
          .each((i, elem) => {
            const data = {
              order: i,
              name: '',
              played: 0,
              wins: 0,
              draw: 0,
              loss: 0,
              for: 0,
              agt: 0,
              percent: 0,
              points: 0
            };
            $(elem)
              .find('td')
              .each((t, element) => {
                if (t === 0) {
                  data.name = $(element).text();
                } else if (t === 1) {
                  data.played = $(element).text();
                } else if (t === 2) {
                  data.wins = $(element).text();
                } else if (t === 3) {
                  data.draw = $(element).text();
                } else if (t === 4) {
                  data.loss = $(element).text();
                } else if (t === 5) {
                  data.for = $(element).text();
                } else if (t === 6) {
                  data.agt = $(element).text();
                } else if (t === 7) {
                  data.percent = $(element).text();
                } else if (t === 8) {
                  data.points = $(element).text();
                }
              });
            list.push(data);
          });
        list.splice(0, 1);
        list.splice(8, 1);
        res.json(list);
      }
    });
  };
}
