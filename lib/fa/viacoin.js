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

var FaViacoin = function (_React$Component) {
    _inherits(FaViacoin, _React$Component);

    function FaViacoin() {
        _classCallCheck(this, FaViacoin);

        return _possibleConstructorReturn(this, (FaViacoin.__proto__ || Object.getPrototypeOf(FaViacoin)).apply(this, arguments));
    }

    _createClass(FaViacoin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 0l-4.3 10h4.3v4.3h-6.1l-1.3 2.8h7.4v4.3h-9.2l-8 18.6-7.9-18.6h-9.2v-4.3h7.3l-1.2-2.8h-6.1v-4.3h4.3l-4.3-10h5.7l7.2 17.1h8.5l7.2-17.1h5.7z m-17.2 27.1l2.5-5.7h-4.9z' })
                )
            );
        }
    }]);

    return FaViacoin;
}(React.Component);

exports.default = FaViacoin;
module.exports = exports['default'];