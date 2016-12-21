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

var IoGearB = function (_React$Component) {
    _inherits(IoGearB, _React$Component);

    function IoGearB() {
        _classCallCheck(this, IoGearB);

        return _possibleConstructorReturn(this, (IoGearB.__proto__ || Object.getPrototypeOf(IoGearB)).apply(this, arguments));
    }

    _createClass(IoGearB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 23h-3.4c-0.4 1.1-0.8 2.1-1.4 3l2.5 2.5-4.2 4.2-2.6-2.5c-0.9 0.6-1.8 0.9-2.9 1.2v3.6h-6v-3.6c-1-0.3-2-0.6-2.9-1.2l-2.6 2.5-4.2-4.2 2.5-2.5c-0.6-0.9-1.1-1.9-1.4-3h-3.4v-6h3.4c0.3-1.1 0.7-2.2 1.2-3.2l-2.3-2.3 4.2-4.2 2.2 2.2c1.1-0.6 2.2-1 3.3-1.3v-3.2h6v3.2c1.1 0.3 2.2 0.7 3.2 1.3l2.3-2.2 4.2 4.2-2.3 2.3c0.5 1 1 2.1 1.2 3.2h3.4v6z m-15 1.2c2.3 0 4.2-1.9 4.2-4.2s-1.9-4.2-4.2-4.2-4.2 1.9-4.2 4.2 1.9 4.2 4.2 4.2z' })
                )
            );
        }
    }]);

    return IoGearB;
}(React.Component);

exports.default = IoGearB;
module.exports = exports['default'];