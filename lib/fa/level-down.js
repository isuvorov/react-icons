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

var FaLevelDown = function (_React$Component) {
    _inherits(FaLevelDown, _React$Component);

    function FaLevelDown() {
        _classCallCheck(this, FaLevelDown);

        return _possibleConstructorReturn(this, (FaLevelDown.__proto__ || Object.getPrototypeOf(FaLevelDown)).apply(this, arguments));
    }

    _createClass(FaLevelDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.2 5.7h15.7q0.3 0 0.5 0.2t0.2 0.6v19.2h4.3q0.9 0 1.3 0.8t-0.2 1.6l-7.1 8.6q-0.4 0.4-1.1 0.4t-1.1-0.4l-7.1-8.6q-0.6-0.7-0.2-1.6 0.4-0.8 1.2-0.8h4.3v-14.3h-7.1q-0.3 0-0.6-0.2l-3.5-4.3q-0.3-0.3-0.1-0.8 0.2-0.4 0.6-0.4z' })
                )
            );
        }
    }]);

    return FaLevelDown;
}(React.Component);

exports.default = FaLevelDown;
module.exports = exports['default'];