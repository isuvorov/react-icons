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

var MdSortByAlpha = function (_React$Component) {
    _inherits(MdSortByAlpha, _React$Component);

    function MdSortByAlpha() {
        _classCallCheck(this, MdSortByAlpha);

        return _possibleConstructorReturn(this, (MdSortByAlpha.__proto__ || Object.getPrototypeOf(MdSortByAlpha)).apply(this, arguments));
    }

    _createClass(MdSortByAlpha, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.3 26.9h10.1v2.6h-14.2v-2.1l9.8-14.3h-9.7v-2.6h13.8v2.1z m-18-4.2h6.5l-3.3-8.6z m1.9-12.2h2.7l7.5 19h-3.1l-1.5-4h-8.5l-1.6 4h-3z m6.9 21.8h7.7l-3.9 3.9z m7.8-24.6h-7.9l3.9-3.9z' })
                )
            );
        }
    }]);

    return MdSortByAlpha;
}(React.Component);

exports.default = MdSortByAlpha;
module.exports = exports['default'];