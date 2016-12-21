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

var TiArrowRightThick = function (_React$Component) {
    _inherits(TiArrowRightThick, _React$Component);

    function TiArrowRightThick() {
        _classCallCheck(this, TiArrowRightThick);

        return _possibleConstructorReturn(this, (TiArrowRightThick.__proto__ || Object.getPrototypeOf(TiArrowRightThick)).apply(this, arguments));
    }

    _createClass(TiArrowRightThick, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.6 11c-1.3 1.3-1.3 3.4 0 4.7l2.7 2.6h-12.1c-1.8 0-3.3 1.5-3.3 3.4 0 1.8 1.5 3.3 3.3 3.3h12.1l-2.7 2.6c-1.3 1.3-1.3 3.5 0 4.8 0.7 0.6 1.5 0.9 2.4 0.9s1.7-0.3 2.4-0.9l10.6-10.7-10.6-10.7c-1.3-1.3-3.5-1.3-4.8 0z' })
                )
            );
        }
    }]);

    return TiArrowRightThick;
}(React.Component);

exports.default = TiArrowRightThick;
module.exports = exports['default'];