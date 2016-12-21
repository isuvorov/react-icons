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

var TiThSmall = function (_React$Component) {
    _inherits(TiThSmall, _React$Component);

    function TiThSmall() {
        _classCallCheck(this, TiThSmall);

        return _possibleConstructorReturn(this, (TiThSmall.__proto__ || Object.getPrototypeOf(TiThSmall)).apply(this, arguments));
    }

    _createClass(TiThSmall, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 31.7c0 2.3-1.9 4.1-4.2 4.1s-4.1-1.8-4.1-4.1c0-2.3 1.8-4.2 4.1-4.2s4.2 1.9 4.2 4.2z m0-11.7c0 2.3-1.9 4.2-4.2 4.2s-4.1-1.9-4.1-4.2c0-2.3 1.8-4.2 4.1-4.2s4.2 1.9 4.2 4.2z m0-11.7c0 2.3-1.9 4.2-4.2 4.2s-4.1-1.9-4.1-4.2c0-2.3 1.8-4.1 4.1-4.1s4.2 1.8 4.2 4.1z m11.7 23.4c0 2.3-1.9 4.1-4.2 4.1s-4.2-1.8-4.2-4.1c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2z m0-11.7c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2z m0-11.7c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.1 4.2-4.1s4.2 1.8 4.2 4.1z m11.6 23.4c0 2.3-1.8 4.1-4.1 4.1s-4.2-1.8-4.2-4.1c0-2.3 1.9-4.2 4.2-4.2s4.1 1.9 4.1 4.2z m0-11.7c0 2.3-1.8 4.2-4.1 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2s4.1 1.9 4.1 4.2z m0-11.7c0 2.3-1.8 4.2-4.1 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.1 4.2-4.1s4.1 1.8 4.1 4.1z' })
                )
            );
        }
    }]);

    return TiThSmall;
}(React.Component);

exports.default = TiThSmall;
module.exports = exports['default'];