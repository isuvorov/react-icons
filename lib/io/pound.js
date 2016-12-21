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

var IoPound = function (_React$Component) {
    _inherits(IoPound, _React$Component);

    function IoPound() {
        _classCallCheck(this, IoPound);

        return _possibleConstructorReturn(this, (IoPound.__proto__ || Object.getPrototypeOf(IoPound)).apply(this, arguments));
    }

    _createClass(IoPound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.3 27.5h-7.3v-4.2h7.9l1-6.6h-7.7v-4.2h8.3l1.8-10h5l-1.8 10h8.3l1.7-10h5l-1.8 10h7.3v4.2h-8l-0.9 6.6h7.7v4.2h-8.3l-1.7 10h-5l1.7-10h-8.3l-1.7 10h-5z m6.5-10.8l-0.9 6.6h8.3l0.9-6.6h-8.3z' })
                )
            );
        }
    }]);

    return IoPound;
}(React.Component);

exports.default = IoPound;
module.exports = exports['default'];