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

var TiSortNumerically = function (_React$Component) {
    _inherits(TiSortNumerically, _React$Component);

    function TiSortNumerically() {
        _classCallCheck(this, TiSortNumerically);

        return _possibleConstructorReturn(this, (TiSortNumerically.__proto__ || Object.getPrototypeOf(TiSortNumerically)).apply(this, arguments));
    }

    _createClass(TiSortNumerically, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.7 30c-1 0-1.7-0.7-1.7-1.7v-10.6l-0.9 0.5c-0.8 0.4-1.8 0-2.3-0.8-0.4-0.8 0-1.8 0.8-2.2l3.3-1.7c0.5-0.2 1.2-0.2 1.6 0.1 0.5 0.3 0.8 0.8 0.8 1.4v13.3c0 1-0.7 1.7-1.6 1.7z m15 0h-8.4c-0.6 0-1.2-0.4-1.5-1-0.3-0.7-0.1-1.4 0.4-1.8l6.6-6.7c0.4-0.4 0.7-1 0.7-1.6 0-0.6-0.3-1.2-0.7-1.6-0.8-0.8-2.3-0.8-3.1 0-0.5 0.4-0.7 1-0.7 1.6 0 0.9-0.7 1.7-1.7 1.7s-1.6-0.8-1.6-1.7c0-1.5 0.5-2.9 1.6-3.9 2.1-2.1 5.8-2.1 7.9 0 1 1 1.6 2.4 1.6 3.9 0 1.5-0.6 2.9-1.6 3.9l-3.8 3.9h4.3c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7z m13.2-9.4c0.6-0.7 0.9-1.7 0.9-2.7 0-2.5-2-4.6-4.5-4.6-1.8 0-3.3 1-4.1 2.5-0.4 0.8-0.1 1.8 0.7 2.3 0.8 0.4 1.8 0.1 2.2-0.8 0.3-0.4 0.7-0.6 1.2-0.6 0.6 0 1.2 0.5 1.2 1.2s-0.6 1.3-1.2 1.3c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7c1.1 0 2 0.9 2 2.1s-0.9 2.1-2 2.1-2.1-1-2.1-2.1c0-0.9-0.8-1.7-1.7-1.7s-1.7 0.8-1.7 1.7c0 3 2.5 5.4 5.5 5.4s5.4-2.4 5.4-5.4c0-1.6-0.7-3-1.8-4z' })
                )
            );
        }
    }]);

    return TiSortNumerically;
}(React.Component);

exports.default = TiSortNumerically;
module.exports = exports['default'];