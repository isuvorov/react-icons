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

var MdWbAuto = function (_React$Component) {
    _inherits(MdWbAuto, _React$Component);

    function MdWbAuto() {
        _classCallCheck(this, MdWbAuto);

        return _possibleConstructorReturn(this, (MdWbAuto.__proto__ || Object.getPrototypeOf(MdWbAuto)).apply(this, arguments));
    }

    _createClass(MdWbAuto, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.2 26.6h3.1l-5.3-15h-3.4l-5.3 15h3.2l1.2-3.2h5.3z m19.4-15h3.1l-3.5 15h-2.8l-2.5-10.1-2.5 10.1h-3l-0.2-0.7c-2.2 4.4-6.6 7.5-11.8 7.5-7.4 0-13.4-6.1-13.4-13.4s6-13.4 13.4-13.4c4.2 0 7.9 2 10.3 5h1.3l2 10.6 2.5-10.6h2.7l2.5 10.6z m-25.2 9.5l2-6.1 1.8 6.1h-3.8z' })
                )
            );
        }
    }]);

    return MdWbAuto;
}(React.Component);

exports.default = MdWbAuto;
module.exports = exports['default'];