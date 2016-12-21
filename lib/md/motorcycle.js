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

var MdMotorcycle = function (_React$Component) {
    _inherits(MdMotorcycle, _React$Component);

    function MdMotorcycle() {
        _classCallCheck(this, MdMotorcycle);

        return _possibleConstructorReturn(this, (MdMotorcycle.__proto__ || Object.getPrototypeOf(MdMotorcycle)).apply(this, arguments));
    }

    _createClass(MdMotorcycle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 28.4c2.8 0 5-2.3 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5z m-18.6-3.4h-4.6v-3.4h4.6c-0.7-1.9-2.5-3.2-4.6-3.2-2.8 0-5 2.2-5 5s2.2 5 5 5c2.1 0 3.9-1.4 4.6-3.4z m19.4-9.9c4.3 0.3 7.6 3.8 7.6 8.3 0 4.6-3.7 8.2-8.4 8.2s-8.2-3.6-8.2-8.2c0-1.1 0.1-2.1 0.4-3l-4.6 4.6h-2.7c-0.8 3.8-4.1 6.6-8.1 6.6-4.7 0-8.4-3.6-8.4-8.2s3.7-8.4 8.4-8.4h19.3l-3.4-3.4h-5.9v-3.2h7.3z' })
                )
            );
        }
    }]);

    return MdMotorcycle;
}(React.Component);

exports.default = MdMotorcycle;
module.exports = exports['default'];