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

var GoBook = function (_React$Component) {
    _inherits(GoBook, _React$Component);

    function GoBook() {
        _classCallCheck(this, GoBook);

        return _possibleConstructorReturn(this, (GoBook.__proto__ || Object.getPrototypeOf(GoBook)).apply(this, arguments));
    }

    _createClass(GoBook, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 22.5h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m-2.1-16.2c-6.6 0-8.2 1.2-9.1 2.1-1-0.9-2.6-2.1-9.2-2.1s-9.6 1.7-9.6 3v22.9c1.1-0.6 4.6-1.9 8.4-2.2 4.4-0.4 9.1 0.4 9.1 1.2 0 0.7 0.3 1.3 1.2 1.3h0.1c0.9 0 1.2-0.6 1.2-1.2 0-0.9 4.6-1.7 9.1-1.3 3.7 0.3 7.3 1.6 8.4 2.2v-22.9c0-1.3-3.1-3-9.6-3z m-10.4 22.3c-1.2-0.6-4-1.1-7.5-1.1s-6.6 0.5-7.5 1.1v-17.3s2.5-2.4 7.5-2.4 7.5 1.1 7.5 2.4v17.3z m17.5 0c-0.9-0.6-4-1.1-7.5-1.1s-6.3 0.5-7.5 1.1v-17.3s2.5-2.4 7.5-2.4 7.5 1.1 7.5 2.4v17.3z m-5-11.1h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m0-5h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m-17.5 5h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z m0 5h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z m0-10h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z' })
                )
            );
        }
    }]);

    return GoBook;
}(React.Component);

exports.default = GoBook;
module.exports = exports['default'];