import React, {useState} from 'react';

const Popup = ({closePopup}) => {
    const tags = ["Платеж", "Срок"]

    const [activeTag, setActiveTag] = useState(tags[0])

    const [salary, setSalary] = useState("")

    const [isCheckboxes, setIsCheckboxes] = useState(false)
    const [checkboxes, setCheckboxes] = useState([])

    const calculation = () => {
        setCheckboxes([Math.floor((salary * 12) * 0.13)])
    }
    return (
        <div className="popup">
            <span className="popup__close" onClick={closePopup}>&times;</span>
            <h1>Налоговый вычет</h1>
            <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более
                13% от своего официального годового дохода.</p>
            <div className="popup__salary">
                <label htmlFor="salary-input">Ваша зарплата в месяц</label>
                <input
                    id="salary-input"
                    className="popup__salary-input"
                    type="number"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                    placeholder="Введите данные"/>
                <span onClick={() => {
                    calculation()
                    setIsCheckboxes(true)
                }}>Рассчитать</span>
            </div>
            {isCheckboxes && salary.length !== 0 &&
            <div className="popup__checkboxes">
                <span className="popup__checkboxes-name">Итого можете внести в качестве досрочных:</span>
                {checkboxes.map((item, index) => (
                    <div className="popup__checkboxes-box" key={item}>
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox">
                            <span>{item} рублей</span>
                            <span>в {index + 1} год</span>
                        </label>
                    </div>
                ))}
            </div>}
            <div className="popup__tags">
                <span className="popup__tags-name">Что уменьшаем?</span>
                <div>
                    {tags.map(item => (
                        <span
                            onClick={() => setActiveTag(item)}
                            key={item}
                            className={`popup__tags-tag ${activeTag === item && "active-tag"}`}>
                    {item}
                </span>
                    ))}
                </div>
            </div>
            <div className="block-button-add">
                <button className="popup__button-add">Добавить</button>
            </div>
        </div>
    );
};

export default Popup;