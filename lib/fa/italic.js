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

var FaItalic = function (_React$Component) {
    _inherits(FaItalic, _React$Component);

    function FaItalic() {
        _classCallCheck(this, FaItalic);

        return _possibleConstructorReturn(this, (FaItalic.__proto__ || Object.getPrototypeOf(FaItalic)).apply(this, arguments));
    }

    _createClass(FaItalic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.5 37.1l0.4-1.9q0.1 0 1.8-0.5t2.5-0.8q0.6-0.8 0.9-2.3 0-0.1 1.4-6.4t2.5-12.2 1.2-6.6v-0.5q-0.5-0.3-1.2-0.4t-1.6-0.2-1.3-0.1l0.5-2.3q0.7 0 2.6 0.1t3.4 0.2 2.7 0q1 0 2.2 0t2.7-0.2 2.2-0.1q-0.2 0.8-0.5 1.9-0.6 0.3-2.2 0.7t-2.5 0.7q-0.1 0.4-0.3 1t-0.2 0.9-0.1 1-0.2 0.9q-0.6 3.3-1.9 9.4t-1.8 7.9q0 0.2-0.3 1.3t-0.4 2-0.4 1.9-0.1 1.3l0 0.4q0.4 0.1 4.2 0.7-0.1 0.9-0.4 2.2-0.2 0-0.7 0t-0.7 0q-0.7 0-2-0.2t-1.9-0.2q-3.1 0-4.6 0-1.1 0-3.2 0.2t-2.7 0.2z' })
                )
            );
        }
    }]);

    return FaItalic;
}(React.Component);

exports.default = FaItalic;
module.exports = exports['default'];