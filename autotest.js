pm.test("Проверка статуса", function () {
    pm.response.to.have.status(201);
});

pm.test("Проверяем время ответа", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});
pm.test("Проверить id тренера в выдаче", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].trainer_id).to.eql("2275");
});
pm.test("Проверка отсутствия имени", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Отсутствует имя покемона(name)");
});
var response = JSON.parse(responseBody);
pm.collectionVariables.set("id_pokemon", response.id);