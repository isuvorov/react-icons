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

var TiInputCheckedOutline = function (_React$Component) {
    _inherits(TiInputCheckedOutline, _React$Component);

    function TiInputCheckedOutline() {
        _classCallCheck(this, TiInputCheckedOutline);

        return _possibleConstructorReturn(this, (TiInputCheckedOutline.__proto__ || Object.getPrototypeOf(TiInputCheckedOutline)).apply(this, arguments));
    }

    _createClass(TiInputCheckedOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.1 10.3c-0.3-1.3-1.2-2.4-2.3-3-0.8-0.4-1.6-0.6-2.5-0.6-1.4 0-2.7 0.6-3.7 1.6h-11.3c-2.7 0-5 2.3-5 5v13.4c0 2.7 2.3 5 5 5h13.4c2.7 0 5-2.3 5-5v-10.8l1-1.8c0.7-1.2 0.8-2.5 0.4-3.8z m-6.2 0.6c0.2-0.4 0.4-0.6 0.7-0.7 0.5-0.2 1.1-0.2 1.5 0 0.4 0.2 0.7 0.6 0.8 1 0.1 0.2 0.1 0.4 0.1 0.6 0 0.2-0.1 0.4-0.2 0.6 0 0 0 0 0 0.1l-6.7 11.6c-0.2 0.5-0.7 0.8-1.2 0.9-0.1 0-0.2 0-0.2 0-0.5 0-0.9-0.2-1.2-0.5l-5-5c-0.7-0.6-0.7-1.7 0-2.3 0.3-0.4 0.7-0.5 1.2-0.5s0.8 0.1 1.1 0.5l3.5 3.4 5.6-9.7z m-0.2 17.4h-13.4c-0.9 0-1.6-0.7-1.6-1.6v-13.4c0-0.9 0.7-1.6 1.6-1.6h11.2l-3.6 6.2-1.9-1.9c-0.6-0.7-1.5-1-2.3-1s-1.7 0.3-2.4 1c-1.3 1.3-1.3 3.4 0 4.7l5 5c0.6 0.6 1.5 1 2.4 1 0.1 0 0.3 0 0.4-0.1 1.1-0.1 2-0.7 2.5-1.6l3.7-6.6v8.3c0 0.9-0.7 1.6-1.6 1.6z' })
                )
            );
        }
    }]);

    return TiInputCheckedOutline;
}(React.Component);

exports.default = TiInputCheckedOutline;
module.exports = exports['default'];