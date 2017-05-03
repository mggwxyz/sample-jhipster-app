package com.mycompany.jhipsterappv2.repository;

import com.mycompany.jhipsterappv2.domain.Book;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Book entity.
 */
@SuppressWarnings("unused")
public interface BookRepository extends JpaRepository<Book,Long> {

}
