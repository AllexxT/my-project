import React from 'react'

const Form = () => {
    return (
        <div>
            <h1>Добавить карточку</h1>
            <form action="">
                <label>
                    <p>Имя</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>Описание</p>
                    <input type="textfield" name="description" />
                </label>
                <label>
                    <p>Цена</p>
                    <input type="number" name="price" />
                </label>
                <label>
                    <p>Скидка</p>
                    <input type="checkbox" name="discount" />
                </label>
                <label>
                    <p>Изображение</p>
                    <input type="file" name="image" />
                </label>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Form;