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

var MdHdrWeak = function (_React$Component) {
    _inherits(MdHdrWeak, _React$Component);

    function MdHdrWeak() {
        _classCallCheck(this, MdHdrWeak);

        return _possibleConstructorReturn(this, (MdHdrWeak.__proto__ || Object.getPrototypeOf(MdHdrWeak)).apply(this, arguments));
    }

    _createClass(MdHdrWeak, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 26.6c3.6 0 6.6-2.9 6.6-6.6s-3-6.6-6.6-6.6-6.8 2.9-6.8 6.6 3.1 6.6 6.8 6.6z m0-16.6c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.4-10 10-10z m-20 3.4c3.6 0 6.6 2.9 6.6 6.6s-3 6.6-6.6 6.6-6.8-2.9-6.8-6.6 3.1-6.6 6.8-6.6z' })
                )
            );
        }
    }]);

    return MdHdrWeak;
}(React.Component);

exports.default = MdHdrWeak;
module.exports = exports['default'];