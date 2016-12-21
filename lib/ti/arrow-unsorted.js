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

var TiArrowUnsorted = function (_React$Component) {
    _inherits(TiArrowUnsorted, _React$Component);

    function TiArrowUnsorted() {
        _classCallCheck(this, TiArrowUnsorted);

        return _possibleConstructorReturn(this, (TiArrowUnsorted.__proto__ || Object.getPrototypeOf(TiArrowUnsorted)).apply(this, arguments));
    }

    _createClass(TiArrowUnsorted, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.3 15.5l-10.3-10.5-10.3 10.5c-0.4 0.3-0.5 0.7-0.5 1.2s0.1 0.8 0.5 1.1c0.3 0.4 0.6 0.5 1.1 0.5h18.4c0.5 0 0.8-0.1 1.1-0.5 0.4-0.3 0.5-0.8 0.5-1.1s-0.1-0.9-0.5-1.2z m-20.6 9l10.3 10.5 10.3-10.5c0.4-0.3 0.5-0.8 0.5-1.2s-0.1-0.8-0.5-1.1c-0.3-0.4-0.6-0.5-1.1-0.5h-18.4c-0.5 0-0.8 0.1-1.1 0.5-0.4 0.3-0.5 0.8-0.5 1.1s0.1 0.9 0.5 1.2z' })
                )
            );
        }
    }]);

    return TiArrowUnsorted;
}(React.Component);

exports.default = TiArrowUnsorted;
module.exports = exports['default'];