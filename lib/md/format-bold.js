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

var MdFormatBold = function (_React$Component) {
    _inherits(MdFormatBold, _React$Component);

    function MdFormatBold() {
        _classCallCheck(this, MdFormatBold);

        return _possibleConstructorReturn(this, (MdFormatBold.__proto__ || Object.getPrototypeOf(MdFormatBold)).apply(this, arguments));
    }

    _createClass(MdFormatBold, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 25.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-5.9v5h5.9z m-5.9-15v5h5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-5z m9.4 7.1c2.2 1 3.6 3.2 3.6 5.7 0 3.5-2.7 6.3-6.2 6.3h-11.8v-23.4h10.5c3.8 0 6.6 3 6.6 6.8 0 1.7-1 3.5-2.7 4.6z' })
                )
            );
        }
    }]);

    return MdFormatBold;
}(React.Component);

exports.default = MdFormatBold;
module.exports = exports['default'];