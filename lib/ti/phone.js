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

var TiPhone = function (_React$Component) {
    _inherits(TiPhone, _React$Component);

    function TiPhone() {
        _classCallCheck(this, TiPhone);

        return _possibleConstructorReturn(this, (TiPhone.__proto__ || Object.getPrototypeOf(TiPhone)).apply(this, arguments));
    }

    _createClass(TiPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.3 11.8l6.2-6.2-0.8-0.7c-0.9-0.9-2.5-0.9-3.5 0l-2.6 2.6c-0.5 0.5-0.8 1.1-0.8 1.8s0.3 1.3 0.8 1.8l0.7 0.7z m-11.2 9.8c-1-1-2.6-1-3.6 0l-2.6 2.6c-0.5 0.5-0.7 1.1-0.7 1.8s0.2 1.3 0.7 1.7l0.7 0.8 6.2-6.2-0.7-0.7z m19.6-13.7l-0.6-0.6-6.1 6.2 1 1.1c0.2 0.1 0.3 0.3 0.3 0.5s-0.1 0.5-0.3 0.6l-9.3 9.3c-0.3 0.4-0.8 0.4-1.1 0l-1.1-1-6.2 6.1 0.6 0.6c0.4 0.5 2.1 1.9 5.1 1.9 2.7 0 7.1-1.2 12.7-6.9 11.3-11.3 5.3-17.5 5-17.8z' })
                )
            );
        }
    }]);

    return TiPhone;
}(React.Component);

exports.default = TiPhone;
module.exports = exports['default'];