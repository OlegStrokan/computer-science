template <typename T>
class Vector {
private:
    T* arr;
    size_t size;
    size_t capacity;

    void resize();

public:
    Vector();
    ~Vector();

    Vector(const Vector& other);
    Vector& operator=(const Vector& other);

    Vector(Vector&& other) noexcept;
    Vector& operator=(Vector&& other) noexcept;

    void push_back(const T& element)
    void pop_back();

    size_t get_size() const;
    size_t get_capacity() const;

    T& operator[](size_t index);
}