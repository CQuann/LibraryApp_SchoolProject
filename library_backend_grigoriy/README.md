Гайд

api:
api/students/<int:class_num>/<int:class_index>/ -возвращает всех учеников к классе(class_num-class_index) ex: 11-3

api/student/<int:student_id>/ -возвращает все книги у ученика с каким-то student_id

api/books/<int:num>/ -возвращает все книги для указанного класса (вместо хуйни которая в <> просто подставляй число)

везде возвращается вот такая хуйня: [{"id":1,"FIO":"Крылов Григорий Петрович","class_number":11,"class_index":3},{"id":2,"FIO":"Мамедов Рустам Парвизович","class_number":11,"class_index":3}]
(это по первому url с параметрами 11 и 3)

БД пока +- пустая если что. Думаю, будем заполнять как сделаем норм интерфейс для этого, заодно и протестим. Я конечно могу через админку django сделать но это не так удобно.

:)
mamamamamamamamamamamamamamamamamamamamamamamamamamamamamamamamama