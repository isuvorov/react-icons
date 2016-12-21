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

var MdFindReplace = function (_React$Component) {
    _inherits(MdFindReplace, _React$Component);

    function MdFindReplace() {
        _classCallCheck(this, MdFindReplace);

        return _possibleConstructorReturn(this, (MdFindReplace.__proto__ || Object.getPrototypeOf(MdFindReplace)).apply(this, arguments));
    }

    _createClass(MdFindReplace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.7 25.2l8.1 8.2-2.4 2.4-8.2-8.1c-1.9 1.4-4.3 2.3-6.8 2.3-3.2 0-6.2-1.3-8.3-3.4l-3.5 3.4v-10h10l-4.2 4.2c1.5 1.5 3.7 2.4 6 2.4 4 0 7.3-2.8 8.1-6.6h3.3c-0.2 2-1 3.8-2.1 5.2z m-9.3-15.2c-4.1 0-7.5 2.8-8.2 6.6h-3.4c0.8-5.6 5.7-10 11.6-10 3.2 0 6.1 1.4 8.2 3.5l3.4-3.5v10h-10l4.2-4.2c-1.5-1.5-3.6-2.4-5.8-2.4z' })
                )
            );
        }
    }]);

    return MdFindReplace;
}(React.Component);

exports.default = MdFindReplace;
module.exports = exports['default'];