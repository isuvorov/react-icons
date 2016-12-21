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

var MdFindInPage = function (_React$Component) {
    _inherits(MdFindInPage, _React$Component);

    function MdFindInPage() {
        _classCallCheck(this, MdFindInPage);

        return _possibleConstructorReturn(this, (MdFindInPage.__proto__ || Object.getPrototypeOf(MdFindInPage)).apply(this, arguments));
    }

    _createClass(MdFindInPage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 21.6q0-2 1.5-3.5t3.5-1.5 3.5 1.5 1.5 3.5-1.5 3.6-3.5 1.4-3.5-1.4-1.5-3.6z m18.4 11.1l-6.4-6.5q1.4-2.1 1.4-4.6 0-3.4-2.5-5.8t-5.9-2.4-5.9 2.4-2.5 5.8 2.5 5.9 5.9 2.5q2.4 0 4.6-1.4l7.4 7.4q-0.9 0.6-2 0.6h-20q-1.3 0-2.3-0.9t-1.1-2.3l0.1-26.8q0-1.3 1-2.3t2.3-0.9h13.4l10 10v19.3z' })
                )
            );
        }
    }]);

    return MdFindInPage;
}(React.Component);

exports.default = MdFindInPage;
module.exports = exports['default'];