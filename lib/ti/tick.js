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

var TiTick = function (_React$Component) {
    _inherits(TiTick, _React$Component);

    function TiTick() {
        _classCallCheck(this, TiTick);

        return _possibleConstructorReturn(this, (TiTick.__proto__ || Object.getPrototypeOf(TiTick)).apply(this, arguments));
    }

    _createClass(TiTick, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 10.4c-1.6-0.9-3.7-0.3-4.5 1.3l-6.2 11.2-3.6-3.6c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l6.7 6.7c0.6 0.6 1.5 1 2.3 1 0.2 0 0.3 0 0.5-0.1 1-0.1 1.9-0.7 2.5-1.6l8.3-15c0.9-1.7 0.3-3.7-1.3-4.6z' })
                )
            );
        }
    }]);

    return TiTick;
}(React.Component);

exports.default = TiTick;
module.exports = exports['default'];