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

var TiSortNumericallyOutline = function (_React$Component) {
    _inherits(TiSortNumericallyOutline, _React$Component);

    function TiSortNumericallyOutline() {
        _classCallCheck(this, TiSortNumericallyOutline);

        return _possibleConstructorReturn(this, (TiSortNumericallyOutline.__proto__ || Object.getPrototypeOf(TiSortNumericallyOutline)).apply(this, arguments));
    }

    _createClass(TiSortNumericallyOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.8 20.2c0.2-0.7 0.4-1.5 0.4-2.3 0-4.3-3.6-7.9-7.9-7.9-2.4 0-4.5 1-6 2.7 0 0-0.1-0.1-0.1-0.1-1.6-1.6-3.9-2.5-6.3-2.5-2.4 0-4.6 0.9-6.3 2.5-0.4-0.7-1-1.4-1.8-1.9-0.8-0.4-1.8-0.7-2.7-0.7-0.8 0-1.6 0.2-2.3 0.5l-2.4 1.3c-2.4 1.2-3.4 4.2-2.1 6.6 0.4 0.9 1.1 1.7 2 2.2v7.7c0 2.8 2.3 5 5 5 1.3 0 2.5-0.5 3.4-1.3 0.9 0.9 2 1.3 3.3 1.3h8.3c1.3 0 2.5-0.5 3.4-1.3 1.3 0.8 2.9 1.3 4.6 1.3 4.8 0 8.7-3.9 8.7-8.7 0-1.6-0.4-3.1-1.2-4.4z m-28.8 8.1c0 1-0.7 1.7-1.7 1.7s-1.6-0.7-1.6-1.7v-10.6c-0.3 0.1-0.5 0.2-0.8 0.2-0.7 0-1.4-0.4-1.7-0.9-0.4-0.9 0-1.9 0.8-2.3l2.3-1.2c0.2-0.1 0.5-0.2 0.8-0.2 0.3 0 0.6 0.1 0.9 0.3 0.5 0.3 1 0.8 1 1.4v13.3z m13.3 1.7h-8.3c-0.7 0-1.3-0.4-1.5-1-0.3-0.7-0.2-1.4 0.3-1.8l6.7-6.7c0.4-0.4 0.6-1 0.6-1.6 0-0.6-0.2-1.2-0.6-1.6s-1-0.6-1.6-0.6-1.2 0.2-1.6 0.6c-0.4 0.4-0.6 1-0.6 1.6 0 0.9-0.8 1.7-1.7 1.7s-1.7-0.8-1.7-1.7c0-1.5 0.6-2.9 1.7-3.9s2.5-1.6 3.9-1.6 2.9 0.5 3.9 1.6c1.1 1 1.7 2.4 1.7 3.9 0 1.5-0.6 2.9-1.7 3.9l-3.8 3.9h4.3c1 0 1.7 0.7 1.7 1.6s-0.7 1.7-1.7 1.7z m8 0c-3 0-5.5-2.4-5.5-5.4 0-0.9 0.8-1.7 1.7-1.7s1.7 0.8 1.7 1.7c0 1.1 0.9 2.1 2.1 2.1s2-1 2-2.1-0.9-2.1-2-2.1c-1 0-1.7-0.7-1.7-1.7s0.7-1.6 1.7-1.6c0.6 0 1.2-0.6 1.2-1.3s-0.6-1.2-1.2-1.2c-0.5 0-0.9 0.2-1.2 0.6-0.3 0.6-0.8 0.9-1.4 0.9-0.3 0-0.6 0-0.8-0.1-0.8-0.5-1.1-1.5-0.7-2.3 0.8-1.5 2.3-2.5 4.1-2.5 2.5 0 4.5 2.1 4.5 4.6 0 1-0.3 2-0.9 2.7 1.1 1 1.8 2.4 1.8 4 0 3-2.5 5.4-5.5 5.4z' })
                )
            );
        }
    }]);

    return TiSortNumericallyOutline;
}(React.Component);

exports.default = TiSortNumericallyOutline;
module.exports = exports['default'];