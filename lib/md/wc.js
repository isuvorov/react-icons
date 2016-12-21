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

var MdWc = function (_React$Component) {
    _inherits(MdWc, _React$Component);

    function MdWc() {
        _classCallCheck(this, MdWc);

        return _possibleConstructorReturn(this, (MdWc.__proto__ || Object.getPrototypeOf(MdWc)).apply(this, arguments));
    }

    _createClass(MdWc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 10c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.2 3.4-3.2 3.4 1.4 3.4 3.2-1.5 3.4-3.4 3.4z m-15 0c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.2 3.4-3.2 3.4 1.4 3.4 3.2-1.5 3.4-3.4 3.4z m17.5 26.6h-5v-10h-5l4.2-12.6c0.5-1.3 1.8-2.4 3.2-2.4h0.2c1.4 0 2.7 1.1 3.2 2.4l4.2 12.6h-5v10z m-20.9 0v-12.5h-2.5v-9.1c0-1.8 1.6-3.4 3.4-3.4h5c1.8 0 3.4 1.6 3.4 3.4v9.1h-2.5v12.5h-6.8z' })
                )
            );
        }
    }]);

    return MdWc;
}(React.Component);

exports.default = MdWc;
module.exports = exports['default'];