var service = require('../src/index');

describe('tickler file service', function () {
  before(function (done) {
    console.log(process.env.DB_CONNECTION)
    service.connect(process.env.DB_CONNECTION);
  });

  it('should add a record to the database', function (done) {

    var tickler = {
      userId = '123',
      desc: "test desc",
      cat: "JANUARY",
      detail: "test details"
    };

    service.create(tickler, function(){
      done();
    });
  });
});
