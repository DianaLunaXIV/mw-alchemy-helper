import styles from "../../styles/Home.module.css"
import ingredients from "../../ingredients"

interface SearchModalProps {
  setIsOpen: (isOpen: boolean) => void;
  onIngredientFound: (ingredient: any) => void;
}

const SearchModal = ({ setIsOpen, onIngredientFound }: SearchModalProps) => {
    return (
      <>
        <div className={styles.centered}>
            <input 
              type="text" 
              placeholder="Search for an ingredient"
              onChange={(e) => {
                const searchTerm = e.target.value;
                const ingredient = ingredients.findByName(searchTerm);
                if (ingredient) {
                  onIngredientFound(ingredient);
                }
              }}
            />
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <p>[x]</p>
            </button>
          </div>
      </>
    );
  };

export default SearchModal;