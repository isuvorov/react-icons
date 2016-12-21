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

var TiSortAlphabetically = function (_React$Component) {
    _inherits(TiSortAlphabetically, _React$Component);

    function TiSortAlphabetically() {
        _classCallCheck(this, TiSortAlphabetically);

        return _possibleConstructorReturn(this, (TiSortAlphabetically.__proto__ || Object.getPrototypeOf(TiSortAlphabetically)).apply(this, arguments));
    }

    _createClass(TiSortAlphabetically, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.2 27.6l-6.7-13.3c-0.6-1.2-2.4-1.2-3 0l-6.7 13.3c-0.4 0.8 0 1.8 0.8 2.2 0.8 0.4 1.8 0.1 2.2-0.7l1.2-2.4h8l1.2 2.4c0.3 0.6 0.9 0.9 1.5 0.9 0.2 0 0.5-0.1 0.7-0.2 0.8-0.4 1.2-1.4 0.8-2.2z m-10.5-4.3l2.3-4.6 2.3 4.6h-4.6z m29 6.7h-10c-0.7 0-1.2-0.4-1.5-0.9s-0.2-1.3 0.1-1.8l8-10.6h-6.6c-1 0-1.7-0.8-1.7-1.7s0.7-1.7 1.7-1.7h10c0.6 0 1.2 0.4 1.5 1s0.2 1.2-0.2 1.7l-8 10.7h6.7c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7z m-13.4-6.7h-3.3c-0.9 0-1.7-0.7-1.7-1.6s0.8-1.7 1.7-1.7h3.3c1 0 1.7 0.7 1.7 1.7s-0.7 1.6-1.7 1.6z' })
                )
            );
        }
    }]);

    return TiSortAlphabetically;
}(React.Component);

exports.default = TiSortAlphabetically;
module.exports = exports['default'];