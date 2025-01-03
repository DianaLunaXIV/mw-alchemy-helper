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
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <p>Close</p>
            </button>
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
          </div>
      </>
    );
  };

export default SearchModal;