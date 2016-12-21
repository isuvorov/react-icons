'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiBook = function (_React$Component) {
    _inherits(TiBook, _React$Component);

    function TiBook() {
        _classCallCheck(this, TiBook);

        return _possibleConstructorReturn(this, (TiBook.__proto__ || Object.getPrototypeOf(TiBook)).apply(this, arguments));
    }

    _createClass(TiBook, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 5h-18.3c-0.5 0-0.9 0.2-1.2 0.5l-5 5c0 0-0.1 0.1-0.1 0.1-0.2 0.3-0.4 0.6-0.4 1 0 0 0 0.1 0 0.1v18.3c0 2.8 2.2 5 5 5h15c2.2 0 4-1.4 4.7-3.3h1.1c2.4 0 4.2-2.2 4.2-5v-16.7c0-2.8-2.2-5-5-5z m-20 26.7c-0.9 0-1.7-0.8-1.7-1.7v-16.7h3.4v18.4h-1.7z m16.7-1.7c0 0.9-0.8 1.7-1.7 1.7h-11.7v-18.4h11.7c0.9 0 1.7 0.8 1.7 1.7v15z m5-3.3c0 1-0.6 1.6-0.9 1.6h-0.8v-13.3c0-2.8-2.2-5-5-5h-14.3l1.7-1.7h17.6c0.9 0 1.7 0.8 1.7 1.7v16.7z' })
                )
            );
        }
    }]);

    return TiBook;
}(React.Component);

exports.default = TiBook;
module.exports = exports['default'];