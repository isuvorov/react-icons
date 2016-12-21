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

var FaMagic = function (_React$Component) {
    _inherits(FaMagic, _React$Component);

    function FaMagic() {
        _classCallCheck(this, FaMagic);

        return _possibleConstructorReturn(this, (FaMagic.__proto__ || Object.getPrototypeOf(FaMagic)).apply(this, arguments));
    }

    _createClass(FaMagic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.6 13l6.5-6.6-2.4-2.4-6.5 6.6z m9.9-6.6q0 0.6-0.4 1l-28.7 28.7q-0.4 0.4-1 0.4t-1-0.4l-4.4-4.4q-0.4-0.4-0.4-1t0.4-1l28.7-28.7q0.4-0.4 1-0.4t1 0.4l4.4 4.4q0.4 0.4 0.4 1z m-30.1-4.2l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.1-0.6 2.1-0.7 0.7-2.2z m7.8 3.6l4.4 1.3-4.4 1.4-1.3 4.4-1.4-4.4-4.4-1.4 4.4-1.3 1.4-4.4z m20.8 10.7l2.1 0.6-2.1 0.7-0.7 2.2-0.7-2.2-2.2-0.7 2.2-0.6 0.7-2.2z m-14.3-14.3l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.2-0.6 2.2-0.7 0.7-2.2z' })
                )
            );
        }
    }]);

    return FaMagic;
}(React.Component);

exports.default = FaMagic;
module.exports = exports['default'];